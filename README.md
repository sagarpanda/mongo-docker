## Initial
mkdir datadir

## Run in dev
docker-compose up mongo

## Run in background
docker-compose up -d mongo

Runs at 27017 port

## mongoose connection
mongoose.connect('mongodb://admin:pass@localhost:27017/mydb1?authSource=admin')

