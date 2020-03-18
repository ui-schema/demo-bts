import React from "react";
import GithubLogo from "./GithubLogo";

export default () => <React.Fragment>
    <p>
        <span role={'img'} aria-label={'Quick Evaluate CodeSandbox'}>🚀</span>{' '}
        <a target="_blank" href={'https://codesandbox.io/s/github/ui-schema/bts-demo'}>Run on CodeSandbox</a>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <span role={'img'} aria-label={'Quick Evaluate Repl.it'}>🚀</span>{' '}
        <a target="_blank" href={'https://repl.it/@elbakerino/ui-schema-cra'}>Repl.it Run</a>&nbsp;|&nbsp;
        <a target="_blank" href={'https://repl.it/github/ui-schema/demo-cra'}>Repl.it Clone</a>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <GithubLogo/>
        <a target="_blank" href={'https://github.com/ui-schema/demo-bts'}>Source of this demo</a>
    </p>
    <hr style={{opacity: 0.2}}/>
    <p>
        <span role={'img'} aria-label={'Examples'}>📖</span> <a target="_blank" href={'https://ui-schema.bemit.codes/examples'}>Live-Editor + Examples</a>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <span role={'img'} aria-label={'Documentation'}>📖</span>
        <a target="_blank" href={'https://github.com/ui-schema/ui-schema/blob/master/README.md'}>Documentation, Current Status</a>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <GithubLogo/>
        <a target="_blank" href={'https://github.com/ui-schema/ui-schema'}>Project, Issues</a>
    </p>
</React.Fragment>;
