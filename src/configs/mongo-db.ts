import mongoose from 'mongoose';

class MongoDB {
	constructor() {
	}

	connect(): void {
		if (process.env.MONGO_URL) {
			mongoose.connect(
				process.env.MONGO_URL,
				{ useNewUrlParser: true, useUnifiedTopology: true },
				(error) => {
					if (error) {
						console.log(`Failed to connect to MongoDB. Error: ${error}`);
					}
					else {
						console.log('Connected successfully to MongoDB');
					}
				}
			);
		}
		else {
			console.log('No MongoDB url provided.');
		}
	}
}

export default MongoDB;