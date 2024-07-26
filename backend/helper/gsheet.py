from google.oauth2 import service_account
from googleapiclient.discovery import build,Resource
import config as env
from typing import List

class Secretary:
    def __init__(self,sec_name,sec_email,club_name) -> None:
        self.name=sec_name
        self.email=sec_email
        self.club = club_name
        
    def __repr__(self) -> str:
        return f"<Secretary {self.name=} {self.email=} {self.club=}>"

class Club:
    def __init__(self,name=None,email=None,sec1=None,sec1_email=None,sec2=None,sec2_email=None) -> None:
        self.name=name
        self.email=email
        self.sec1 = Secretary(sec1,sec1_email,self.name)
        self.sec2 = Secretary(sec2,sec2_email,self.name)
        self.logo = None
        self.galley_images=None
        self.content=None
        
    def __repr__(self) -> str:
        return f"<Club {self.name=} {self.email=} {self.sec1=} {self.sec2=}>"
    
    def get_dict(self):
        return {
            'name':self.name,
            'email':self.email,
            'logo':self.logo,
            'secretaries':[
                {'name':self.sec1.name,'email':self.sec1.email},
                {'name':self.sec2.name,'email':self.sec2.email}
            ],
            'gallery':self.galley_images,
            'content':self.content
        }
        

class Gsheet:
    def __init__(self) -> None:
        self.spreadsheet_id = env.sheet_id
        self.sa_info = env.sa_info
        self.service:Resource = self.authorise()
        self.clubs:List[Club] = []
    
    def authorise(self)->Resource:     
        credentials = service_account.Credentials.from_service_account_info(self.sa_info)
        service = build("sheets", "v4", credentials=credentials)
        return service
    
    def get_range(self,range,major_dimension = 'ROWS'):
        res = self.service.spreadsheets().values().get(spreadsheetId=self.spreadsheet_id, range=range,majorDimension=major_dimension).execute()
        return res.get("values",[])
    
    def get_club_names(self):
        return [i[0] for i in self.get_range('HEADSHEET!A2:A')]
    
    def get_club_emails(self):
        return [i[0] for i in self.get_range('HEADSHEET!B2:B')]
    
    def get_club_sheet(self,club_name):
        content,gallery_images,logo,club_email,sec1,sec1_email,sec2,sec2_email = self.get_range(f'{club_name}!A2:H','COLUMNS')
        return content,gallery_images,logo,club_email[0],sec1[0],sec1_email[0],sec2[0],sec2_email[0]
    
    def get_club_by_name(self,club_name):
        content,gallery_images,logo,club_email,sec1,sec1_email,sec2,sec2_email = self.get_club_sheet(club_name)
        cb = Club(club_name,club_email,sec1,sec1_email,sec2,sec2_email)
        cb.content = content
        cb.galley_images=gallery_images
        cb.logo = logo
        return cb
    
    def get_clubs(self):
        names = self.get_club_names()
        clubs = []
        for name in names:
            clubs.append(self.get_club_by_name(name))
        self.clubs=clubs
        return clubs