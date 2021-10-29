up: # 起動
	docker-compose up
build: # ビルド
	docker-compose build --no-cache --force-rm
init: # 初期化
	docker-compose build
	docker-compose up -d
	docker-compose run --rm front yarn install
	docker-compose down
yarn-install: # ライブラリインストール
	docker-compose run --rm front yarn istall