const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var favouriteDishesSchema=new Schema({
    dish:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Dish'
    }
});

const favouriteSchema=new Schema({
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
        dishes:[favouriteDishesSchema]
});

var Favourites=mongoose.model('favorite',favouriteSchema);
module.exports=Favourites;