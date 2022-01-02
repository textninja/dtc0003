.PHONY: cluster

cluster:
	gcloud beta container clusters create "dtc0003" \
	--zone "us-west1-b" --no-enable-basic-auth --cluster-version "1.21.5-gke.1302" \
	--release-channel "regular" --machine-type "e2-medium" \
	--image-type "COS_CONTAINERD" --disk-type "pd-standard" \
	--disk-size "100" --metadata disable-legacy-endpoints=true \
	--scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" \
	--max-pods-per-node "110" --num-nodes "3" \
	--logging=SYSTEM,WORKLOAD \
	--monitoring=SYSTEM \
	--enable-ip-alias \
	--no-enable-intra-node-visibility --default-max-pods-per-node "110" \
	--enable-autoscaling --min-nodes "0" --max-nodes "3" \
	--no-enable-master-authorized-networks \
	--addons HorizontalPodAutoscaling,HttpLoadBalancing,GcePersistentDiskCsiDriver \
	--enable-autoupgrade --enable-autorepair --max-surge-upgrade 1 \
	--max-unavailable-upgrade 0 --enable-autoprovisioning --min-cpu 2 \
	--max-cpu 6 --min-memory 8 --max-memory 24 \
	--enable-autoprovisioning-autorepair \
	--enable-autoprovisioning-autoupgrade \
	--autoprovisioning-max-surge-upgrade 1 \
	--autoprovisioning-max-unavailable-upgrade 0 \
	--autoscaling-profile optimize-utilization \
	--enable-vertical-pod-autoscaling \
	--resource-usage-bigquery-dataset "billing" \
	--enable-resource-consumption-metering \
	--enable-shielded-nodes \
	--node-locations "us-west1-b"

	gcloud container clusters get-credentials dtc0003
