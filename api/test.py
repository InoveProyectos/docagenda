import requests

resp = requests.post("http://localhost:9000/auth/register", json={})
print(resp.text)