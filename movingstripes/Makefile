.PHONY: image image.push local

image:
	docker build -t textninja/movingstripes .

image.push:
	docker push textninja/movingstripes

local:
	docker run --rm -p8000:80 -v $PWD:/usr/local/apache2/htdocs textninja/movingstripes
