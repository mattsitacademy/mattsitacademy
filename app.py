from flask import Flask
import redis

app = Flask(__name__)

# Connect to Redis service (service name must be "redis" in docker-compose.yml)
r = redis.Redis(host="redis", port=6379, decode_responses=True)


@app.route("/")
def hello():
    return "Hello from Docker Compose with Redis!"


@app.route("/set/<key>/<value>")
def set_value(key, value):
    try:
        r.set(key, value)
        return f"Stored {key} = {value} in Redis"
    except Exception as e:
        return f"Error setting value: {str(e)}", 500


@app.route("/get/<key>")
def get_value(key):
    try:
        value = r.get(key)
        if value:
            return f"{key} = {value}"
        return f"{key} not found in Redis"
    except Exception as e:
        return f"Error getting value: {str(e)}", 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

