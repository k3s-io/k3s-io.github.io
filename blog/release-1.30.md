---
title: k3s release v1.30.3+k3s1
slug: release-1.30
authors:
  - name: Orlin Vasilev
    title: Community
    url: https://github.com/OrlinVasilev
    image_url: https://github.com/OrlinVasilev.png
    socials:
      x: OrlinVasilev
      github: OrlinVasilev
tags: [release]
hide_table_of_contents: false
date: 2024-07-31T10:00
---

This release updates Kubernetes to v1.30.3, and fixes a number of issues.

<!-- truncate -->#

For more details on what's new, see the [Kubernetes release notes.](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v1302)

## Changes since v1.30.2+k3s2:
---
- Update channel server for k3s2 (#10446)  
- Set correct release channel for e2e upgrade test (#10460)  
- Backports for 2024-07 release cycle (#10497)  
- Bump k3s-root to v0.14.0  
- Bump github.com/hashicorp/go-retryablehttp from 0.7.4 to 0.7.7  
- Bump Local Path Provisioner version  
- Ensure remotedialer kubelet connections use kubelet bind address  
- Chore: Bump Trivy version  
- Add etcd s3 config secret implementation  
- July Test Backports (#10507)  
- Update to v1.30.3-k3s1 and Go 1.22.5 (#10536)  
- Fix issues loading data-dir value from env vars or dropping config files (#10596)  

## Embedded Component Versions
---
| Component	| Version |
|:----------:|:-----:|
|Kubernetes	| v1.30.3|
|Kine|	v0.11.11|
|SQLite|	3.44.0|
|Etcd|	v3.5.13-k3s1|
|Containerd|	v1.7.17-k3s1|
|Runc|	v1.1.12|
|Flannel|	v0.25.4|
|Metrics-server|	v0.7.0|
|Traefik|	v2.10.7|
|CoreDNS|	v1.10.1|
|Helm-controller|	v0.16.1|
|Local-path-provisioner|	v0.0.28|

For full release notes please [read here](https://github.com/k3s-io/k3s/releases/tag/v1.30.3%2Bk3s1)