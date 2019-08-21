const Item = require('../models/Item') 
const List = require('../models/List') 

module.exports = {
    async index(req, res) {
        const { listId, userId } = req.params 
        let list = null 
        let error = null 

        try {
            list = await List.findOne({_id: listId}).
                populate({
                    path: "users",
                    match: {
                        _id: userId
                    }
                }).
                exec() 
        } catch (err) {
            error = err 
        }

        if (!list) {
            return res.status(404).json({ 
                message: `List ${listId} not found`,
                error 
            }) 
        }

        const items = list.items 
        return res.json(items) 
    },

    async store(req, res) {
        const { listId, userId } = req.params 
        const { name, quantity, observation } = req.body 
        
        let list = null 
        let error = null 

        try {
            list = await List.findOne({_id: listId}).
                populate({
                    path: "users",
                    match: {
                        _id: userId
                    }
                }).
                exec() 
        } catch (err) {
            error = err 
        }

        if (!list) {
            return res.status(404).json({ 
                message: `List ${listId} not found`,
                error 
            }) 
        }

        let item = await Item.findOne({ name }).exec() 

        if (!item) {
            item = await Item.create({ name }) 
        }

        list.items.push({
            _id: item._id,
            quantity,
            observation
        }) 

        await list.save() 

        return res.status(201).json(item) 
    }
}