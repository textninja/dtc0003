.PHONY: image image.push container

image:
	docker build -t textninja/movingstripes .

image.push:
	docker push textninja/movingstripes

container:
	docker run --rm -p8000:80 textninja/movingstripes
