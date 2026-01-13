const{MongoClient} = require('mongodb');
// Connection URL
const url = 'mongodb+srv://sethuselvi:1234@nodetuts.73kic02.mongodb.net/?appName=nodetuts'
const client = new MongoClient(url);
async function main(){
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('Helloworld')
const collection = db.collection('User')
// const data ={
//     firstname: 'Arulan',
//     lastname: 'Sathuguru',
//     city: 'Chennai',
//     country: 'India',
//     phone_number: '97463544646'
// }
//Insert many
// const insertResult = await collection.insertMany([data]);
// console.log('Inserted documents =>', insertResult);
//InsertOne
// const insertResult = await collection.insertOne(data);
// console.log('Inserted documents =>', insertResult);
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
const result = await collection.find({firstname: 'Deepika'}).toArray();
console.log('Found documents =>', result);
const countResult = await collection.countDocuments({});
console.log('Count of the documents in user collection =>', countResult);
const updated_result = await collection.updateMany({firstname: 'Arulan'},{ $set: { lastname: 'Guru' } });
console.log('Updated documents =>', updated_result);
const deleteResult = await collection.deleteMany({firstname: 'Arulan'})
console.log('Deleted documents =>', deleteResult);


return 'Done!'
}
//When the promise resolves successfully, the resolved value is automatically passed as an argument to the console.log function
main().then(console.log).catch(console.error).finally(async ()=> await client.close());


