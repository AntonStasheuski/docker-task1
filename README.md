Backend
    docker build --tag api .
    docker run -p 4567:4567 api
    
Frontend
    docker build --tag front .
    docker run -p 80:80 front
    
Go to
    localhost/html
    open console see list of films
    
