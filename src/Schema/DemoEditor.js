import React from 'react';
import {SchemaEditor, isInvalid, createOrderedMap, createStore} from "@ui-schema/ui-schema";
import {widgets,} from "@ui-schema/ds-bootstrap";


const schema1 =  createOrderedMap({
    type: "object",
    title: "demo-bts",
    properties: {
        headline: {
            type: "string",
            minLength: 2,
            maxLength: 30,
            view: {
                sizeMd: 12,
            }
        },
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
    const [store, setStore] = React.useState(undefined);
    const [schema, setSchema] = React.useState(undefined);

    React.useEffect(() => {
        // simulating getting `schema` and `data` from an API
        setTimeout(() => {
            setStore(createStore(createOrderedMap(data1)));
            setSchema(createOrderedMap(schema1));
        }, 1200);
    }, [setStore, setSchema]);

    if(!store || !schema) return <div style={{textAlign: 'center', margin: '75px 0'}}>
        <svg className={["bi", "bi-arrow-clockwise"].join(' ')} width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63l-.5.865A5.472 5.472 0 0010 4.5z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M10.646 1.646a.5.5 0 01.708 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L12.793 4.5l-2.147-2.146a.5.5 0 010-.708z" clipRule="evenodd"/>
        </svg>

        <p>Loading Schema</p>
    </div>;

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
            Code of this form/schema: <a target="_blank"
                                         rel="noopener noreferrer"
                                         href={'https://github.com/ui-schema/demo-cra/blob/master/src/Schema/DemoEditor.js'}>src/Schema/DemoEditor.js</a>
        </p>
    </React.Fragment>;
};

export default Editor;
