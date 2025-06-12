from playwright.sync_api import sync_playwright

def test_get_user():
    with sync_playwright() as p:
        request_context = p.request.new_context(
            base_url="https://reqres.in",
            extra_http_headers={
                "x-api-key": "reqres-free-v1",
                "Accept": "application/json",
                "User-Agent": "PlaywrightTest"
            }
        )
        response = request_context.get("/api/users/2")
        print("Status:", response.status)
        print("Body:", response.text())
        assert response.ok
        json_data = response.json()
        assert json_data["data"]["email"] == "janet.weaver@reqres.in"
        request_context.dispose()
