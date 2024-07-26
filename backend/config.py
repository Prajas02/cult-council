from dotenv import load_dotenv
load_dotenv()
import os
dburi = ""
sheet_id = os.getenv('sheet_id')
keys = [
    "type",
    "project_id",
    "private_key_id",
    "private_key",
    "client_email",
    "client_id",
    "auth_uri",
    "token_uri",
    "auth_provider_x509_cert_url",
    "client_x509_cert_url",
    "universe_domain",
]
sa_info = {i: os.getenv(i) for i in keys}
