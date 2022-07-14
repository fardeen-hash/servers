
import mongoose from 'mongoose';

const communitySchema = mongoose.Schema({
    communityname: String,
    description: String,
    discussion:[{
        Comment: String,
        userid: String,
        createdAt:{
         type: Date,
         default: new Date()
        },
           }],
post :[
 {
     heading: String,
     description: String,
     
 }
],
        
});

const CommunitySchema = mongoose.model('CommunitySchema', communitySchema);

export default CommunitySchema;
//