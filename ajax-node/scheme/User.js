
var Schema = mongoose.Schema;

var UserScheme = new Schema({
    id: ObjectId,
    name: String,
    password: String
})

module.exports = UserScheme