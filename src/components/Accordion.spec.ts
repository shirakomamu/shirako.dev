import "windi.css";
import "@/assets/styles/index.less";
import { mount } from "@cypress/vue";
import Accordion from "./Accordion.vue";

describe("Accordion", () => {
  describe("without props", () => {
    it("shows title but not content", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
      });
      cy.get("#title").should("be.visible");
      cy.get("#content").should("not.be.visible");
    });

    it("shows content after title is clicked", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
      });
      cy.get("#title").click();
      cy.get("#content").should("be.visible");
      cy.get("#title").click();
      cy.get("#content").should("not.be.visible");
    });
  });

  describe("with initialVisibility = true", () => {
    it("shows title and content", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
        props: {
          initialVisibility: true,
        },
      });
      cy.get("#title").should("be.visible");
      cy.get("#content").should("be.visible");
    });

    it("hides content after title is clicked", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
        props: {
          initialVisibility: true,
        },
      });
      cy.get("#title").click();
      cy.get("#content").should("not.be.visible");
      cy.get("#title").click();
      cy.get("#content").should("be.visible");
    });
  });
});
