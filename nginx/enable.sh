ln -sf $(dirname -- "$(realpath -- $0;)";)/docagenda /etc/nginx/sites-enabled/docagenda
sudo systemctl restart nginx.service
