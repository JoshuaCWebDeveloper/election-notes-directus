import { useApi, useItems, definePanel } from '@directus/extensions-sdk';
import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, createTextVNode, toDisplayString, unref, createElementVNode, Fragment, renderList } from 'vue';

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { key: 2 };
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
    },
    collection: {
      type: String,
      default: ""
    },
    groupBy: {
      type: String,
      default: "field"
    },
    groupByField: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const collection = ref(props.collection);
    const api = useApi();
    const schema = ref(null);
    const schemaLoading = ref(true);
    const schemaError = ref(null);
    const fetchSchema = async () => {
      try {
        schemaLoading.value = true;
        const response = await api.get(`/collections/${props.collection}`);
        schema.value = response.data.data;
      } catch (err) {
        schemaError.value = err;
      } finally {
        schemaLoading.value = false;
      }
    };
    fetchSchema();
    const { items, loading, error } = useItems(collection, {
      fields: ref(["*"]),
      filter: ref(null),
      page: ref(null),
      search: ref(null),
      sort: ref(null),
      limit: ref(null)
      // Fetch all items
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["text", { "has-header": __props.showHeader }])
        },
        [
          createTextVNode(
            toDisplayString(__props.text) + " ",
            1
            /* TEXT */
          ),
          unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_1, "Loading...")) : unref(error) ? (openBlock(), createElementBlock(
            "div",
            _hoisted_2,
            "Error: " + toDisplayString(unref(error)),
            1
            /* TEXT */
          )) : (openBlock(), createElementBlock("div", _hoisted_3, [
            createElementVNode("ul", null, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(items), (item) => {
                  return openBlock(), createElementBlock(
                    "li",
                    {
                      key: item.id
                    },
                    toDisplayString(item.id) + ": " + toDisplayString(JSON.stringify(item)),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]))
        ],
        2
        /* CLASS */
      );
    };
  }
});

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "\n.text[data-v-63b47dbf] {\n    padding: 12px;\n}\n.text.has-header[data-v-63b47dbf] {\n    padding: 0 12px;\n}\n";
n(css,{});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

var PanelComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63b47dbf"], ["__file", "panel.vue"]]);

var index = definePanel({
  id: "group-contest",
  name: "Group Contest",
  icon: "groups",
  description: "Display a collection as a contest between subgroups.",
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
      },
      {
        field: "collection",
        name: "Collection",
        type: "string",
        meta: {
          interface: "system-collection",
          options: {
            includeSystem: false,
            includeSingleton: false
          },
          width: "full"
        }
      },
      {
        field: "groupBy",
        name: "Group By",
        type: "string",
        default: "field",
        meta: {
          interface: "select-radio",
          options: {
            choices: [
              { text: "Field Value", value: "field" },
              { text: "Computed Value", value: "computed" }
            ]
          },
          width: "half"
        }
      },
      {
        field: "groupByField",
        name: "Group By Field",
        type: "string",
        meta: {
          interface: "system-field",
          width: "half",
          options: {
            collectionField: "collection",
            allowPrimaryKey: true,
            placeholder: "Primary Key"
          },
          hidden: options.groupBy !== "field"
        }
      }
    ];
  },
  minWidth: 12,
  minHeight: 8
});

export { index as default };
