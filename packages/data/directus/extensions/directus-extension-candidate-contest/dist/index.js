import { useItems, definePanel } from '@directus/extensions-sdk';
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createTextVNode, Fragment, renderList, createBlock, ref, unref } from 'vue';

const _hoisted_1$2 = { class: "badges" };
const _hoisted_2$2 = { class: "badge points" };
const _hoisted_3$2 = { class: "badge confidence" };
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "stance-card",
  props: {
    stance: {}
  },
  setup(__props) {
    const props = __props;
    const rating = computed(() => {
      const value = props.stance.rating;
      if (typeof value !== "number" || isNaN(value) || value < 0 || value > 100) {
        return "none";
      }
      if (value >= 0 && value < 33) {
        return "low";
      } else if (value >= 33 && value < 66) {
        return "medium";
      } else if (value >= 66 && value <= 100) {
        return "high";
      }
      throw new Error("Invalid rating: " + value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["stance-card", "rating-" + rating.value])
        },
        [
          createElementVNode("p", null, [
            createElementVNode(
              "strong",
              null,
              toDisplayString(_ctx.stance.issue.name) + ": ",
              1
              /* TEXT */
            ),
            createTextVNode(
              " " + toDisplayString(_ctx.stance.issue.description),
              1
              /* TEXT */
            )
          ]),
          createElementVNode("p", null, [
            createElementVNode(
              "strong",
              null,
              toDisplayString(_ctx.stance.title),
              1
              /* TEXT */
            )
          ]),
          createElementVNode("div", _hoisted_1$2, [
            createElementVNode(
              "span",
              _hoisted_2$2,
              toDisplayString(_ctx.stance.points),
              1
              /* TEXT */
            ),
            createElementVNode(
              "span",
              _hoisted_3$2,
              toDisplayString(_ctx.stance.confidence) + "%",
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$2 = "\n.stance-card[data-v-3ef07045] {\n    border: 1px solid #e0e0e0;\n    border-radius: 8px;\n    padding: 16px;\n    margin-bottom: 16px;\n    word-break: break-word;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n    margin-right: 5px;\n&[data-v-3ef07045]:last-child {\n        margin-bottom: 0;\n}\n&.rating-none[data-v-3ef07045] {\n        background: linear-gradient(to bottom, #f0f0f0, #e6e6e6);\n}\n&.rating-low[data-v-3ef07045] {\n        background: linear-gradient(to bottom, #ffebee, #ffcdd2);\n}\n&.rating-medium[data-v-3ef07045] {\n        background: linear-gradient(to bottom, #ffeec4, #ffdf9d);\n}\n&.rating-high[data-v-3ef07045] {\n        background: linear-gradient(to bottom, #e8f5e9, #c8e6c9);\n}\nstrong[data-v-3ef07045] {\n        display: block;\n        margin-bottom: 8px;\n        color: #333;\n}\n.badges[data-v-3ef07045] {\n        display: flex;\n        justify-content: flex-end;\n        gap: 8px;\n\n        margin-top: 12px;\n        container: badges / inline-size;\n}\n.badge[data-v-3ef07045] {\n        font-size: 11cqw;\n        padding: 0px 8px;\n        border-radius: 16px;\n        font-weight: 500;\n&.points[data-v-3ef07045] {\n            background: linear-gradient(135deg, #007bff, #0056b3);\n            color: white;\n}\n&.confidence[data-v-3ef07045] {\n            background: linear-gradient(135deg, #f0f0f0, #e0e0e0);\n            color: #333;\n}\n}\n}\n";
n(css$2,{});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

var StanceCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3ef07045"], ["__file", "stance-card.vue"]]);

const _hoisted_1$1 = { class: "candidate" };
const _hoisted_2$1 = { class: "candidate-header" };
const _hoisted_3$1 = { class: "name" };
const _hoisted_4$1 = { class: "badge-container" };
const _hoisted_5 = { class: "badge score" };
const _hoisted_6 = { class: "badge confidence" };
const _hoisted_7 = { class: "stances" };
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "candidate-column",
  props: {
    candidate: {},
    stances: {}
  },
  setup(__props) {
    const props = __props;
    const stances = computed(() => {
      return props.stances.sort((a, b) => {
        return b.rating - a.rating;
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("h2", _hoisted_2$1, [
          createElementVNode(
            "span",
            _hoisted_3$1,
            toDisplayString(_ctx.candidate.firstName) + " " + toDisplayString(_ctx.candidate.middleName) + " " + toDisplayString(_ctx.candidate.lastName),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("div", _hoisted_4$1, [
          createElementVNode(
            "span",
            _hoisted_5,
            toDisplayString(_ctx.candidate.score),
            1
            /* TEXT */
          ),
          createElementVNode(
            "span",
            _hoisted_6,
            toDisplayString(_ctx.candidate.confidence) + "%",
            1
            /* TEXT */
          )
        ]),
        createElementVNode("div", _hoisted_7, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(stances.value, (stance) => {
              return openBlock(), createBlock(StanceCard, {
                key: stance.id,
                stance
              }, null, 8, ["stance"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]);
    };
  }
});

var css$1 = "\n.candidate[data-v-8be12724] {\n    display: flex;\n    flex-direction: column;\n\n    background: linear-gradient(135deg, #ffffff, #f8f9fa);\n    border-radius: 12px;\n    padding: 10px;\n}\n.candidate-header[data-v-8be12724] {\n    margin-top: 0;\n    color: #2c3e50;\n    font-weight: 700;\n    font-size: 1.4em;\n    flex: 0 0 95px;\n    padding: 10px 20px 10px;\n}\n.badge-container[data-v-8be12724] {\n    display: flex;\n    gap: 5px;\n\n    margin-bottom: 20px;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 16px;\n    flex: 0;\n}\n.badge[data-v-8be12724] {\n    font-size: 0.9em;\n    padding: 6px 12px;\n    border-radius: 20px;\n    font-weight: 500;\n&.score[data-v-8be12724] {\n        background: linear-gradient(135deg, #007bff, #0056b3);\n        color: white;\n}\n&.confidence[data-v-8be12724] {\n        background: linear-gradient(135deg, #f0f0f0, #e0e0e0);\n        color: #333;\n}\n}\n.stances[data-v-8be12724] {\n    flex: 1;\n    overflow: auto;\n    scrollbar-width: thin;\n    margin-right: -5px;\n}\n";
n(css$1,{});

var CandidateColumn = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8be12724"], ["__file", "candidate-column.vue"]]);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 2 };
const _hoisted_4 = {
  key: 3,
  class: "candidates"
};
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "panel",
  props: {
    showHeader: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const CANDIDATE_COLLECTION = ref("candidate");
    const ISSUE_COLLECTION = ref("issue");
    const STANCE_COLLECTION = ref("stance");
    const {
      items: candidates,
      loading: candidatesLoading,
      error: candidatesError
    } = useItems(CANDIDATE_COLLECTION, {
      fields: ref(["*"]),
      filter: ref(null),
      page: ref(null),
      search: ref(null),
      sort: ref(null),
      limit: ref(null)
      // Fetch all items
    });
    const {
      items: issues,
      loading: issuesLoading,
      error: issuesError
    } = useItems(ISSUE_COLLECTION, {
      fields: ref(["*"]),
      filter: ref(null),
      page: ref(null),
      search: ref(null),
      sort: ref(null),
      limit: ref(null)
      // Fetch all items
    });
    const {
      items: stances,
      loading: stancesLoading,
      error: stancesError
    } = useItems(STANCE_COLLECTION, {
      fields: ref(["*"]),
      filter: ref(null),
      page: ref(null),
      search: ref(null),
      sort: ref(null),
      limit: ref(null)
      // Fetch all items
    });
    const getCandidateStances = computed(() => (candidateId) => {
      var _a;
      return ((_a = stances.value) == null ? void 0 : _a.filter((stance) => stance.candidate === candidateId).map((stance) => {
        var _a2;
        const issue = (_a2 = issues.value) == null ? void 0 : _a2.find(
          (issue2) => issue2.id === stance.issue
        );
        return __spreadProps(__spreadValues({}, stance), {
          issue
        });
      })) || [];
    });
    return (_ctx, _cache) => {
      return unref(candidatesLoading) || unref(stancesLoading) ? (openBlock(), createElementBlock("div", _hoisted_1, "Loading...")) : unref(candidatesError) ? (openBlock(), createElementBlock(
        "div",
        _hoisted_2,
        "Error: " + toDisplayString(unref(candidatesError)),
        1
        /* TEXT */
      )) : unref(stancesError) ? (openBlock(), createElementBlock(
        "div",
        _hoisted_3,
        "Error: " + toDisplayString(unref(stancesError)),
        1
        /* TEXT */
      )) : (openBlock(), createElementBlock("div", _hoisted_4, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(unref(candidates), (candidate) => {
            return openBlock(), createBlock(CandidateColumn, {
              key: candidate.id,
              candidate,
              stances: getCandidateStances.value(candidate.id)
            }, null, 8, ["candidate", "stances"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]));
    };
  }
});

var css = "\n.candidates[data-v-c949ed1a] {\n    display: flex;\n    flex-wrap: nowrap;\n    gap: 5px;\n    justify-content: space-between;\n    align-items: flex-start;\n    align-content: flex-start;\n    flex-direction: row;\n\n    background-color: #f1f1f1;\n    margin: 0;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n.candidate[data-v-c949ed1a] {\n        flex: 1;\n        min-width: 0;\n        height: 100%;\n}\n}\n";
n(css,{});

var PanelComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c949ed1a"], ["__file", "panel.vue"]]);

var index = definePanel({
  id: "candidate-contest",
  name: "Candidate Contest",
  icon: "groups",
  description: "Display candidates and stances as a contest.",
  component: PanelComponent,
  options: ({ options = {} }) => {
    return [
      {
        field: "text",
        name: "Text",
        type: "string",
        meta: {
          interface: "input",
          width: "full"
        }
      }
    ];
  },
  minWidth: 12,
  minHeight: 8
});

export { index as default };
