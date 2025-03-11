from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow cross-origin requests from React frontend

@app.route('/register_user', methods=['GET'])
def register_user():
    user_data = [
        {"id": 1, "name": "John Doe", "email": "john@example.com"},
        {"id": 2, "name": "Jane Smith", "email": "jane@example.com"}
    ]
    return jsonify(user_data)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
