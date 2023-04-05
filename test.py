import requests

resp = requests.post("http://api:9000/auth/register", json={})
print(resp.text)
