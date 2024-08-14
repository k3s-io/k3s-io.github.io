import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import index from './index.module.css';

function Landing() {
  return (
    <Layout>
    <main className={index.landing}>
    <section className={index.intro}>
      <div className={index.bgPrimary}>
        <div className={`${index.wrap} ${index.gridTwo}`}>
          <div>
            <h1>Lightweight Kubernetes</h1>
            <h4>The certified Kubernetes distribution built for IoT & Edge computing</h4>
          </div>
          <div>
            <h4>This won't take long…</h4>
            <CodeBlock className="language-sh">{
`curl -sfL https://get.k3s.io | sh - 
# Check for Ready node, takes ~30 seconds 
sudo k3s kubectl get node `
            }</CodeBlock>
            <p>For detailed installation, <a href="https://docs.k3s.io">refer to the docs</a></p>
          </div>
        </div>
      </div>
      <div className={index.folder}>
        <h4>Great For</h4>
        <div className={`${index.bgLight} ${index.gridDynamic} ${index.textCenter}`}>
          <h5>Edge</h5>
          <h5>IoT</h5>
          <h5>CI</h5>
          <h5>ARM</h5>
        </div>
      </div>
    </section>

    <section className={index.wrap}>
      <h2>Why Use K3s</h2>
      <div className={index.gridThree}>
        <div>
          <h5>Perfect for Edge</h5>
          <p>K3s is a highly available, certified
            Kubernetes distribution designed
            for production workloads in
            unattended, resource-constrained,
            remote locations or inside
            IoT appliances.</p>
        </div>

        <div>
          <h5>Simplified &amp; Secure</h5>
          <p>K3s is packaged as a single
            &lt;70MB binary that reduces the
            dependencies and steps needed
            to install, run and auto-update a
            production Kubernetes cluster.</p>
        </div>

        <div>
          <h5>Optimized for ARM</h5>
          <p>Both ARM64 and ARMv7 are
            supported with binaries and
            multiarch images available for
            both. K3s works great on
            something as small as a
            Raspberry Pi to an AWS
            a1.4xlarge 32GiB server.</p>
        </div>
      </div>
    </section>
    <hr />
    <section className={index.wrap}>
      <h2>How it Works</h2>
      <img src="/img/how-it-works-k3s-revised.svg" alt="{{ .Site.Title }}"></img>
      <p>The above figure shows the difference 
        between K3s server and K3s agent nodes. 
        For more information,
        see the <a href="https://docs.k3s.io/architecture">
        architecture documentation.</a>
      </p>
    </section>
    <section className={index.getStarted}>
      <div className={index.white}>
        <h2 className={index.textCenter}>Get Started</h2>
        <h5>
          1. Download K3s - <a href="https://github.com/k3s-io/k3s/releases/latest">latest release</a>: x86_64, ARMv7, and ARM64 are supported
          <br/>
          2. Run server
        </h5>
        <CodeBlock className="language-sh">{
`sudo k3s server &
# Kubeconfig is written to /etc/rancher/k3s/k3s.yaml
sudo k3s kubectl get node

# On a different node run the below command. 
# NODE_TOKEN comes from /var/lib/rancher/k3s/server/node-token on your server
sudo k3s agent --server https://myserver:6443 --token \${NODE_TOKEN}`
        }</CodeBlock>
      </div>
      <div className={`${index.learnMore} ${index.bgPrimary}`}>
        <div className={index.wrap}>
          <h2>Learn More</h2>
          <div className={index.gridTwo}>
            <div>
              <p>Read the latest K3s blogs.</p>
              <a href="/blog" class="button button--lg button--static">Blog</a>
            </div>
            <div>
              <p>Sign up for the latest "K3s Basics" Online Training.</p>
              <a href="https://www.rancher.academy/courses/k3s-basics" class="button button--lg button--static">Watch Training</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={`${index.bgLight} ${index.cncf} ${index.textCenter}`}>

    <div className={index.gridTwo}>

      <div>
      <p>Originally developed by</p>
      <a href='https://www.rancher.com/'><ThemedImage className={index.cncfLogo}
        sources={{
          light: '/img/rancher-suse-logo-horizontal-color.png',
          dark: '/img/rancher-suse-logo-horizontal-white.png',
        }}
      /></a>
      </div>

      <div>
      <p>K3s is a CNCF Sandbox Project</p>
      <a href='https://www.cncf.io/'><ThemedImage className={index.cncfLogo}
        sources={{
          light: '/img/cncf-color.png',
          dark: '/img/cncf-white.png',
        }}
      /></a>
      </div>

    </div>
    </section>
    </main>
    </Layout>
  );
}

export default Landing