import React from "react";
import GithubLogo from "./GithubLogo";
import {Link} from "react-router-dom";

export default () => <React.Fragment>
    <p>
        <span role={'img'} aria-label={'Quick Evaluate CodeSandbox'}>🚀</span>{' '}
        <Link to={'https://codesandbox.io/s/github/ui-schema/bts-demo/tree/master/?autoresize=1&fontsize=12&hidenavigation=1&module=%2Fsrc%2FSchema%2FDemoEditor.js'}>Run on CodeSandbox</Link>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <span role={'img'} aria-label={'Quick Evaluate Repl.it'}>🚀</span>{' '}
        <Link to={'https://repl.it/@elbakerino/ui-schema-cra'}>Repl.it Run</Link>&nbsp;|&nbsp;
        <Link to={'https://repl.it/github/ui-schema/demo-cra'}>Repl.it Clone</Link>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <GithubLogo/> <Link to={'https://github.com/ui-schema/demo-cra'}>Source of this demo</Link>
    </p>
    <hr style={{opacity: 0.2}}/>
    <p>
        <span role={'img'} aria-label={'Examples'}>📖</span> <Link to={'https://ui-schema.bemit.codes/examples'}>Live-Editor + Examples</Link>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <span role={'img'} aria-label={'Documentation'}>📖</span> <Link to={'https://github.com/ui-schema/ui-schema/blob/master/README.md'}>Documentation, Current Status</Link>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <GithubLogo/> <Link to={'https://github.com/ui-schema/ui-schema'}>Project, Issues</Link>
    </p>
</React.Fragment>;
