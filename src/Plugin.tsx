import React from "react";
import './Plugin.module.css';
import {IDataEntryPluginProps} from "./Plugin.types";

const PluginInner = (propsFromParent: IDataEntryPluginProps) => {
    const {
        values,
        errors,
        warnings,
        fieldsMetadata = {},
        setFieldValue,
        setContextFieldValue,
    } = propsFromParent;

    return (
        <div style={{ backgroundColor: 'white', padding: '10px' }}>
            <h3>Hello from a plugin 👋</h3>

            <p>Fields metadata:</p>
            <pre>{JSON.stringify(fieldsMetadata, null, 2)}</pre>

            <p>Values:</p>
            <pre>{JSON.stringify(values, null, 2)}</pre>

            <p>Errors:</p>
            <pre>{JSON.stringify(errors, null, 2)}</pre>

            <p>Warnings:</p>
            <pre>{JSON.stringify(warnings, null, 2)}</pre>

            <br />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, width: 400 }}>
                <button
                    style={{ marginTop: '10px' }}
                    onClick={() => {
                        setFieldValue({
                            fieldId: 'region',
                            value: 'New name',
                            options: {
                                error: 'Error message',
                            }
                        })
                    }}
                >
                    Set value with error
                </button>

                <button
                    style={{ marginTop: '10px' }}
                    onClick={() => {
                        setContextFieldValue({
                            fieldId: 'geometry',
                            value: {
                                latitude: 60.0001,
                                longitude: 60.0001,
                            },
                        })
                    }}
                >
                    Set coordinates
                </button>
            </div>
        </div>
    )
}

export default PluginInner;