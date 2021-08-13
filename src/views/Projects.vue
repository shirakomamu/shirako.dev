<template>
  <div class="space-y-8 max-w-3xl">
    <FloatingButton />
    <h5 class="text-4xl dark:text-white">Projects</h5>

    <ProjectItem
      icon-url="/icons/192-or-w.png"
      title="Shirako Eats"
      date="2021/07"
      :initially-expanded="true"
    >
      <div class="grid grid-cols-1 gap-2">
        <InlineGallery
          class="my-2"
          :show-pagination="true"
          :show-controls="true"
        >
          <div>
            <img
              src="@/assets/images/hrs_promo/initial.png"
              alt="Shirako Eats promotional image"
              class=""
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold">
              Organize your favorites into lists.
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_1.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold">
              Easily find restaurants near you.
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_2.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold">
              When you want to go out to eat,
            </p>
            <p class="text-center text:lg sm:text-xl font-semibold mb-8">
              just pick from your lists.
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_3.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold mb-8">
              Add your friends' lists, too. Up to 10.
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_4.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold">
              We'll find the best match for you.
            </p>
            <p class="text-center text:lg sm:text-xl font-semibold mb-8">
              We'll make sure it's open, too.*
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_5.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
            <p class="text-xs sm:text-sm mt-4">
              * Only at US locations when business hours are available.
            </p>
          </div>
        </InlineGallery>

        <div class="text-center my-2">
          <a
            href="https://eats.shirako.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="
              text-white
              transition
              bg-blue-srk/80
              hover:bg-blue-srk/100
              focus:bg-blue-srk/100
              px-4
              py-2
              align-middle
              rounded-lg
            "
          >
            Go to site <OpenInNew class="icon-inline" />
          </a>
        </div>

        <a
          href="https://github.com/shirakomamu/shirako-hrs"
          target="_blank"
          rel="noopener noreferrer"
          class="ps-text-link"
          >Source code available on GitHub</a
        >

        <p>
          Service that allows people to organize their favorite restaurants into
          lists and helps choose which to go when feeling indecisive.
        </p>
        <p>
          When you mix your lists with your friends', the service will
          intelligently choose restaurants according to what's most popular
          among everyone, using a weighted randomization algorithm.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>User authentication and authorization</li>
          <li>Hierarchical role-based access control system</li>
          <li>Relational database (PostgreSQL), managed by MikroORM</li>
          <li>Client-side relational store, managed by Vuex ORM</li>
          <li>Persistent Redis store</li>
          <li>Responsive design (desktop, mobile, dark mode)</li>
          <li>Installable as PWA</li>
          <li>User-accessible API service</li>
          <li>Auth0 API integration (user management)</li>
          <li>Yelp API integration (business identify, business search)</li>
          <li>SendGrid API integration (email send)</li>
        </ul>
      </div>
    </ProjectItem>

    <ProjectItem title="Human Resources System" date="2021/05">
      <div class="grid grid-cols-1 gap-2">
        <InlineGallery
          class="my-2"
          :show-pagination="true"
          :show-controls="true"
        >
          <div class="px-8">
            <img
              src="@/assets/images/x_hrs_promo/x_hrs_0.png"
              alt="Human Resources System snapshot"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <img
              src="@/assets/images/x_hrs_promo/x_hrs_1.png"
              alt="Human Resources System snapshot"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <img
              src="@/assets/images/x_hrs_promo/x_hrs_2.png"
              alt="Human Resources System snapshot"
              loading="lazy"
            />
          </div>
        </InlineGallery>
        <p class="italic">
          Note: Images of app are reproduced with permission.
        </p>

        <p>Internal corporate system for Human Resources-related functions.</p>
        <p>
          The system provides numerous functions, such as employee onboarding,
          offboarding, workflow automation, organizational structure management,
          and more.
        </p>
        <p>
          The implementation of this system greatly reduced the frequency of
          administrative errors in the Human Resources process and simplified
          complex processes into fully auditable and easy-to-follow steps. The
          workload of IT staff was also greatly reduced by allowing Human
          Resources department to self-serve the most common day-to-day
          workflows.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>Corporate SSO with Google Workspace as IDP</li>
          <li>Hierarchical role-based access control system</li>
          <li>System logs for accountability</li>
          <li>Relational database (MySQL)</li>
          <li>Client-side relational store, managed by Vuex ORM</li>
          <li>Responsive design (desktop, mobile, dark mode)</li>
          <li>Installable as PWA</li>
          <li>API service for integration with other corporate tools</li>
          <li>Google Workspace API integration (user, resource management)</li>
          <li>Gmail API integration (email send)</li>
          <li>Jira Platform API integration (issue creation and management)</li>
          <li>Internal IT assets platform integration (user assets data)</li>
          <li>Automated build/deploy with Bitbucket and Google Cloud Build</li>
          <li>Deployed as an auto-scaling container in Google Cloud Run</li>
        </ul>
      </div>
    </ProjectItem>

    <ProjectItem title="Network Alert System" date="2021/04">
      <div class="grid grid-cols-1 gap-2">
        <p>
          Automated system for monitoring network infrastructure health and
          alerting IT staff. The system reports any irregularities, failures, or
          outages across the entire network infrastructure (gateways, routers,
          switches, and access points) to IT staff within 5 minutes of
          detection.
        </p>
        <p>
          The system is responsible for monitoring over 80 different devices
          across 3 distinct networks and has enabled the IT department to more
          quickly remediate any issues arising from the network.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>UniFi Controller API integration (device state, traffic data)</li>
          <li>Slack API integration (message send)</li>
          <li>Deployed as a trigger service in Google Apps Script</li>
        </ul>
      </div>
    </ProjectItem>
    <ProjectItem title="Production Order System" date="2021/03">
      <div class="grid grid-cols-1 gap-2">
        <InlineGallery
          class="my-2"
          :show-pagination="true"
          :show-controls="true"
        >
          <div class="px-8">
            <img
              src="@/assets/images/x_pos_promo/x_pos_0.png"
              alt="Production Order System snapshot"
              loading="lazy"
            />
          </div>
        </InlineGallery>
        <p class="italic">Note: Image of app is reproduced with permission.</p>

        <p>
          Internal corporate system for Sales to create production orders for
          Manufacturing.
        </p>
        <p>
          The system provided automatic metrics calculations for the Sales staff
          to ensure that each sale met or exceeded profitability requirements.
          Once an order was confirmed, all data was sent electronically to the
          Production Managers in a standardized and easy-to-understand manner.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>Corporate SSO with Google Workspace as IDP</li>
          <li>Hierarchical role-based access control system</li>
          <li>System logs for accountability</li>
          <li>Relational database (MySQL)</li>
          <li>Client-side relational store, managed by Vuex ORM</li>
          <li>Responsive design (desktop, mobile, dark mode)</li>
          <li>Installable as PWA</li>
          <li>Internal customer database API integration</li>
          <li>Gmail API integration (email send)</li>
          <li>Slack API integration (message send)</li>
          <li>Google Drive API integration (file management)</li>
          <li>Google Docs API integration (file creation and templating)</li>
          <li>Automated build/deploy with Bitbucket and Google Cloud Build</li>
          <li>Deployed as an auto-scaling container in Google Cloud Run</li>
        </ul>
      </div>
    </ProjectItem>

    <ProjectItem title="Supplier/Customer Database" date="2021/02">
      <div class="grid grid-cols-1 gap-2">
        <InlineGallery
          class="my-2"
          :show-pagination="true"
          :show-controls="true"
        >
          <div class="px-8">
            <img
              src="@/assets/images/x_scd_promo/x_scd_0.png"
              alt="Supplier/Customer Database snapshot"
              loading="lazy"
            />
          </div>
        </InlineGallery>
        <p class="italic">Note: Image of app is reproduced with permission.</p>

        <p>
          Internal corporate system for Marketing and Procurement to manage
          accounts for suppliers, vendors, and customers.
        </p>
        <p>
          The system provided an easy-to-use interface for organizing and
          tracking accounts for partner companies. It also provided an API for
          other internal corporate systems to connect to whenever such data is
          required, such as for invoicing, shipping, or billing.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>Corporate SSO with Google Workspace as IDP</li>
          <li>Hierarchical role-based access control system</li>
          <li>System logs for accountability</li>
          <li>Relational database (MySQL)</li>
          <li>Client-side relational store, managed by Vuex ORM</li>
          <li>Responsive design (desktop, mobile, dark mode)</li>
          <li>Installable as PWA</li>
          <li>API service for integration with other corporate tools</li>
          <li>Automated build/deploy with Bitbucket and Google Cloud Build</li>
          <li>Deployed as an auto-scaling container in Google Cloud Run</li>
        </ul>
      </div>
    </ProjectItem>

    <ProjectItem title="Internal Company Portal" date="2021/01">
      <div class="grid grid-cols-1 gap-2">
        <InlineGallery
          class="my-2"
          :show-pagination="true"
          :show-controls="true"
        >
          <div class="px-8">
            <img
              src="@/assets/images/x_icp_promo/x_icp_0.png"
              alt="Internal Company Portal snapshot"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <img
              src="@/assets/images/x_icp_promo/x_icp_1.png"
              alt="Internal Company Portal snapshot"
              loading="lazy"
            />
          </div>
        </InlineGallery>
        <p class="italic">
          Note: Images of app are reproduced with permission.
        </p>

        <p>
          Internal corporate portal for quick access to the most commonly-used
          tools and news.
        </p>
        <p>
          The portal only surfaced tools and links relevant to the user, based
          on their position and job responsibilities. This segregation ensured
          that each user's portal experience was tailored specifically for what
          they needed.
        </p>
        <p>
          The portal also provided a way for managerial staff to communicate to
          all users, since the portal was installed by default by IT staff to
          all company-managed computers and mobile devices.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>Corporate SSO with Google Workspace as IDP</li>
          <li>Hierarchical role-based access control system</li>
          <li>System logs for accountability</li>
          <li>Relational database (MySQL)</li>
          <li>Client-side relational store, managed by Vuex ORM</li>
          <li>Responsive design (desktop, mobile, dark mode)</li>
          <li>Installable as PWA</li>
          <li>Automated build/deploy with Bitbucket and Google Cloud Build</li>
          <li>Deployed as an auto-scaling container in Google Cloud Run</li>
        </ul>
      </div>
    </ProjectItem>

    <ProjectItem title="Manufacturing Metrics Monitor" date="2020/10">
      <div class="grid grid-cols-1 gap-2">
        <InlineGallery
          class="my-2"
          :show-pagination="true"
          :show-controls="true"
        >
          <div class="px-8">
            <img
              src="@/assets/images/x_mem_promo/x_mem_0.png"
              alt="Manufacturing Metrics Monitor snapshot"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <img
              src="@/assets/images/x_mem_promo/x_mem_1.png"
              alt="Manufacturing Metrics Monitor snapshot"
              loading="lazy"
            />
          </div>
        </InlineGallery>
        <p class="italic">
          Note: Images of app are reproduced with permission.
        </p>

        <p>
          Tool for production managers to analyze various manufacturing metrics,
          such as machine production efficiency, production volume, and
          production rates.
        </p>
        <p>
          This system accepted data from a vendor-provided data monitoring
          system (DMS), which produced raw data in <code>.xls</code> format.
          After the DMS data is uploaded into the system, and production
          managers could quickly and efficiently monitor the health of the
          manufacturing line.
        </p>
        <p>
          The system was also capable of alerting management if there was a
          deficiency beyond specified thresholds, ensuring remediative measures
          were taken as quickly as possible.
        </p>
        <p>
          This system is able to process millions of rows of datapoints in as
          little as 5 seconds due to optimized SQL queries.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>Corporate SSO with Google Workspace as IDP</li>
          <li>Hierarchical role-based access control system</li>
          <li>System logs for accountability</li>
          <li>Relational database (MySQL)</li>
          <li>Client-side relational store, managed by Vuex ORM</li>
          <li>Responsive design (desktop, mobile, dark mode)</li>
          <li>Installable as PWA</li>
          <li>XLS parsing</li>
          <li>Automated build/deploy with Bitbucket and Google Cloud Build</li>
          <li>Deployed as an auto-scaling container in Google Cloud Run</li>
        </ul>
      </div>
    </ProjectItem>

    <ProjectItem title="GCP Database Manager" date="2020/06">
      <div class="grid grid-cols-1 gap-2">
        <p>
          Tool for IT staff and developers to manage and monitor data on Google
          Cloud SQL servers.
        </p>
        <p>
          The tool's functions included the creation and deletion of new
          databases, the management of database users and their grants
          (privileges), and the viewing of database statistics such as
          databases, tables, and columns.
        </p>
        <p>
          The usage of this tool greatly reduced the risk of data loss due to
          eliminating the need to manually connect to and execute commands on
          the SQL server. Additionally, the tool ensured that each database was
          set up in a consistent manner with preset encoding, timezone, and
          collation settings.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>Built-in Google Workspace IDP integration</li>
          <li>Hierarchical role-based access control system</li>
          <li>System logs for accountability</li>
          <li>Relational database (MySQL)</li>
          <li>Responsive design (desktop, mobile, dark mode)</li>
          <li>Google Cloud SQL integration through JDBC driver</li>
          <li>Deployed as a web app in Google Apps Script</li>
        </ul>
      </div>
    </ProjectItem>
  </div>
</template>

<script lang="ts">
import InlineGallery from "@/components/InlineGallery.vue";
import ProjectItem from "@/components/ProjectItem.vue";
import OpenInNew from "@/components/icons/OpenInNew.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { InlineGallery, OpenInNew, ProjectItem, FloatingButton },
  name: "Projects",
});
</script>

<style lang="less" scoped></style>
