export default () => ({
  url: process.env.MONGO_URL || 'mongodb://localhost:27017/test',
  options: {
    maxPoolSize: 500,
    minPoolSize: 32,
    socketTimeoutMS: 3000,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
})
