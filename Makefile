deploy/prod:
	./bin/prepare_deploy.sh prod && \
		./bin/build_changelog.sh prod commit && \
		./bin/prepare_deploy.sh prod && \
		git push origin HEAD:develop && \
		git push origin HEAD:master && \
		git push origin -f HEAD:release

deploy/stag:
	./bin/prepare_deploy.sh stag && \
		./bin/merge_prs.sh stag && \
		./bin/build_changelog.sh stag commit && \
		git push origin -f HEAD:stage

deploy/test:
	./bin/prepare_deploy.sh test && \
		./bin/merge_prs.sh test && \
		./bin/build_changelog.sh test commit && \
		git push origin -f HEAD:test
