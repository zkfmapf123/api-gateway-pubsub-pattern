pub-deploy:
	copilot deploy --app labor --env poc --name pub --force

sub-deploy:
	copilot deploy --app labor --env poc --name sub --force

deploy:
	make pub-deploy
	make sub-deploy
