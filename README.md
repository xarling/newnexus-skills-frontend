# NewNexus Frontend




# Howto run



## NGINX configuration


    location /nn-skills {
        alias /Users/xanderarling/Documents/dev/workshop/frontend/app/;
        index  index.html;
        try_files $uri $uri/ /website/index.html;
    }

    location /nn-skills/api/ {
        proxy_pass              http://localhost:8080/newnexus/api/;
        proxy_set_header        X-Real-IP $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header        X-Forwarded-Proto $scheme;
        proxy_set_header        Host $http_host;
    }