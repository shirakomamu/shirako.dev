import "windi.css";
import "@/assets/styles/index.less";
import { mount } from "@cypress/vue";
import Accordion from "./Accordion.vue";

describe("Accordion", () => {
  describe("without props", () => {
    it("toggles properly", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
      });

      cy.get("#title").should("be.visible");
      cy.get("#content").should("not.be.visible");

      cy.get("#title").click();
      cy.get("#content").should("be.visible");

      cy.get("#title").click();
      cy.get("#content").should("not.be.visible");
    });

    it("shows arrow", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
      });

      cy.get(".icon-inline").should("be.visible");
    });
  });

  describe("with initialVisibility = true", () => {
    it("toggles properly", () => {
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

      cy.get("#title").click();
      cy.get("#content").should("not.be.visible");

      cy.get("#title").click();
      cy.get("#content").should("be.visible");
    });
  });

  describe("with initialVisibility = false", () => {
    it("toggles properly", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
        props: {
          initialVisibility: false,
        },
      });

      cy.get("#title").should("be.visible");
      cy.get("#content").should("not.be.visible");

      cy.get("#title").click();
      cy.get("#content").should("be.visible");

      cy.get("#title").click();
      cy.get("#content").should("not.be.visible");
    });
  });

  describe("with showArrow = true", () => {
    it("shows arrow", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
        props: {
          showArrow: true,
        },
      });

      cy.get(".icon-inline").should("be.visible");
    });
  });

  describe("with showArrow = false", () => {
    it("doesn't have arrow", () => {
      mount(Accordion, {
        slots: {
          title: `<div id="title">Title</div>`,
          default: `<div id="content">Content</div>`,
        },
        props: {
          showArrow: false,
        },
      });

      cy.get(".icon-inline").should("not.exist");
    });
  });
});
