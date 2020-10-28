const mongoose=require('mongoose');
const Schema=mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var descriptionSchema=new Schema({
    description:{
        type:String,
        required:true
    }
})

const leadersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    designation: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default:false      
    },
    descriptions:[descriptionSchema]
 }, {
        timestamps: true
    });

    var Leaders=mongoose.model('Leader',leadersSchema);
module.exports=Leaders;