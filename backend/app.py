# app.py

from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

# Configure MongoDB
CORS(app)
app.config['MONGO_URI'] = 'mongodb+srv://Sukhada:ssk@12345@cluster0.3nfii4g.mongodb.net/'
mongo = PyMongo(app)

# Define the company collection
companies_collection = mongo.db.companydata

# API endpoint to fetch all companies
@app.route("https://companydata-production.up.railway.app/api/companies", methods=['GET'])
def get_companies():
    companies = list(companies_collection.find({}, {'_id': 0}))
    return jsonify(companies)

# API endpoint to search companies by name
@app.route("https://companydata-production.up.railway.app/api/companies", methods=["GET"])
def search_companies():
    query = request.args.get('q')
    companies = list(companies_collection.find({}, {'_id': 0}))
    return jsonify(companies)

if __name__ == '__main__':
    app.run(debug=True)
