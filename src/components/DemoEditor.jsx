import React from 'react';
import { createOrderedMap } from '@ui-schema/ui-schema/createMap'
import { UIMetaProvider } from '@ui-schema/react/UIMeta'
import { UIStoreProvider, createStore } from '@ui-schema/react/UIStore'
import { storeUpdater } from '@ui-schema/react/storeUpdater'
import { WidgetEngine } from '@ui-schema/react/WidgetEngine'
import { browserT } from '../t';
import { DefaultHandler } from '@ui-schema/react/DefaultHandler';
import { ValidityReporter } from '@ui-schema/react/ValidityReporter';
import { schemaPluginsAdapterBuilder } from '@ui-schema/react/SchemaPluginsAdapter';
import {
    requiredPlugin,
    requiredValidatorLegacy,
    standardValidators,
    Validator,
    validatorPlugin
} from '@ui-schema/json-schema';
import { SchemaGridHandler } from '@ui-schema/ds-bootstrap/Grid';
import { GridContainer } from '@ui-schema/ds-bootstrap/GridContainer';
import { bindingComponents } from '@ui-schema/ds-bootstrap/Binding/Components'
import { widgetsDefault } from '@ui-schema/ds-bootstrap/Binding/WidgetsDefault'
import { widgetsExtended } from '@ui-schema/ds-bootstrap/Binding/WidgetsExtended'
import { isInvalid } from "@ui-schema/react/isInvalid";

/**
 *
 * @type {import('@ui-schema/ds-material/Binding').BtsBinding}
 */
const customBinding = {
    ...bindingComponents,
    widgetPlugins: [
        DefaultHandler,
        schemaPluginsAdapterBuilder([
            validatorPlugin,
            requiredPlugin,
        ]),
        SchemaGridHandler,
        ValidityReporter,
    ],
    widgets: {
        ...widgetsDefault,
        ...widgetsExtended,
    },
}

const validator = Validator([
    ...standardValidators,
    requiredValidatorLegacy,
])

const schema1 = {
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
        coffee: {
            type: "string",
            widget: "OptionsRadio",
            default: "milk",
            view: {
                sizeMd: 3
            },
            enum: [
                'milk',
                'sugar',
                'black',
            ],
            t: {
                de: {
                    title: 'Kaffee',
                    enum: {
                        milk: 'Milch',
                        sugar: 'Zucker',
                        black: 'Schwarz'
                    }
                },
                en: {
                    title: 'Coffee',
                    enum: {
                        milk: 'milk',
                        sugar: 'sugar',
                        black: 'black'
                    }
                }
            },
        },
        cake: {
            type: "array",
            widget: "OptionsCheck",
            view: {
                sizeMd: 3
            },
            items: {
                oneOf: [
                    {
                        const: 'cheesecake',
                        t: {
                            de: {
                                title: 'Käsekuchen',
                            },
                            en: {
                                title: 'Cheesecake',
                            },
                        },
                    },
                    {
                        const: 'chocolate',
                    },
                    {
                        const: 'donut'
                    }
                ],
            },
            default: [
                'cheesecake'
            ],
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
            },
            required: ['country'],
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
};

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

    const onChange = React.useCallback((actions) => {
        setStore(storeUpdater(actions))
    }, [setStore])

    if(!store || !schema) return <div style={{textAlign: 'center', margin: '75px 0'}}>
        <svg className={["bi", "bi-arrow-clockwise"].join(' ')} width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63l-.5.865A5.472 5.472 0 0010 4.5z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M10.646 1.646a.5.5 0 01.708 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L12.793 4.5l-2.147-2.146a.5.5 0 010-.708z" clipRule="evenodd"/>
        </svg>

        <p>Loading Schema</p>
    </div>;

    const invalid = isInvalid(store.getValidity())

    return <React.Fragment>
        <UIMetaProvider
            binding={customBinding}
            t={browserT}
            validate={validator.validate}
        >
            <UIStoreProvider
                store={store}
                onChange={onChange}
                showValidity={showValidity}
            >
                <GridContainer>
                    <WidgetEngine isRoot schema={schema}/>
                </GridContainer>
            </UIStoreProvider>
        </UIMetaProvider>

        <div>
            <p
                className={['w-100', 'mt-3', 'mb-1', invalid ? 'text-danger' : 'text-success'].join(' ')}
            >
                {invalid ? 'Form is invalid.' : 'Form is valid.'}
            </p>
        </div>

        <button
            className={['btn', 'btn-primary', 'my-2'].join(' ')}
            onClick={() => {
                console.log('data-store: ', store.getValues().toJS());
                console.log('is-invalid: ', !!invalid);
                invalid ?
                    setShowValidity(true) :
                    console.log('should do some action here')
            }}
        >send!
        </button>

        <p>
            See <code>console.log</code> after clicking on <code>SEND!</code>
        </p>
        <hr style={{opacity: 0.2}}/>
        <p>
            {'Code of this form/schema: '}
            <a
                target="_blank" rel="noopener noreferrer"
                href={'https://github.com/ui-schema/demo-cra/blob/master/src/components/DemoEditor.jsx'}
            >src/components/DemoEditor.jsx</a>
        </p>
    </React.Fragment>;
};

export default Editor;
