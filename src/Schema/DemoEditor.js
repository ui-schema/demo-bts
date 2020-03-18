import React from 'react';
import {SchemaEditor, isInvalid, createMap, createOrderedMap, createStore} from "@ui-schema/ui-schema";
import {Link} from "react-router-dom";
import {widgets,} from "@ui-schema/ds-bootstrap";


const schema1 =  createOrderedMap({
    type: "object",
    title: "headline",
    /*view: {
        sizeMd: 6,
    },*/
    properties: {
        name: {
            type: "string",
            minLength: 2,
            maxLength: 3,
            view: {
                sizeMd: 6,
            }
        },
        surname: {
            type: "string",
            view: {
                sizeMd: 6
            }
        },
        center_items: {
            type: "boolean",
            default: true,
            view: {
                sizeMd: 12
            }
        },
        /*
        sizeDef: {
            type: "string",
            widget: "OptionsRadio",
            default: "middle",
            view: {
                sizeMd: 3
            },
            enum: [
                'small',
                'middle',
                'big',
            ],
        },
        layouts: {
            type: "array",
            widget: "OptionsCheck",
            view: {
                sizeMd: 3
            },
            enum: [
                'sidebar_left',
                'sidebar_right',
                'notice',
                'content',
                'footer',
            ],
            default: [
                'sidebar_left'
            ],
        }, */
        address: {
            type: "object",
            properties: {
                street: {
                    type: "string",
                    view: {
                        sizeMd: 9
                    }
                },
                street_no: {
                    type: "string",
                    view: {
                        sizeMd: 3
                    }
                },
                city: {
                    type: "string",
                    view: {
                        sizeMd: 12
                    }
                },
                country: {
                    type: "string",
                    view: {
                        sizeMd: 12
                    }
                },
            }
        },
        birthday: {
            type: "string",
            format: "date",
            view: {
                sizeMd: 6
            }
        },
        quantity: {
            type: "number",
            view: {
                sizeMd: 6
            }
        },
    }
});

const data1 = {
    headline: 'Some Demo Content Headline',
};

const Editor = () => {
    const [showValidity, setShowValidity] = React.useState(false);
    const [store, setStore] = React.useState(() => createStore(createOrderedMap(data1)));
    const [schema, setSchema] = React.useState(schema1);

   /* React.useEffect(() => {
        // simulating getting `schema` and `data` from an API
        setTimeout(() => {
            setData(createOrderedMap(data1));
            setSchema(createOrderedMap(schema1));
        }, 1200);
    }, [setData, setSchema]);

    if(!data || !schema) return <div style={{textAlign: 'center', margin: '75px 0'}}>
        <svg className={["bi", "bi-arrow-repeat"]} width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clipRule="evenodd"/>
        </svg>

        <p>Loading Schema</p>
    </div>; */

    return <React.Fragment>
        <SchemaEditor
            schema={schema}
            store={store}
            onChange={setStore}
            widgets={widgets}
            showValidity={showValidity}
        >
            {/*
                add children that should be under the schema editor,
                they can use the context of the editor for working
            */}
        </SchemaEditor>

        <button
            className={["btn", "btn-primary", "my-2"].join(' ')}
            onClick={() => {
                console.log('data-store: ', store.getValues().toJS());
                console.log('is-invalid: ', !!isInvalid(store.getValidity()));
                isInvalid(store.getValidity()) ?
                    setShowValidity(true) :
                    console.log('should do some action here')
            }}
        >send!</button>

        <p>
            See <code>console.log</code> after clicking on <code>SEND!</code>
        </p>
        <hr style={{opacity: 0.2}}/>
        <p>
            Code of this form/schema: <Link to={'https://github.com/ui-schema/demo-cra/blob/master/src/Schema/DemoEditor.js'}>src/Schema/DemoEditor.js</Link>
        </p>
    </React.Fragment>;
};

export default Editor;
