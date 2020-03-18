import React from "react";
import GithubLogo from "./GithubLogo";

export default () => <React.Fragment>
    <p>
        <span role={'img'} aria-label={'Quick Evaluate CodeSandbox'}>🚀</span>{' '}
        <a target="_blank"
           rel="noopener noreferrer"
           href={'https://codesandbox.io/s/github/ui-schema/demo-bts/tree/master/?autoresize=1&fontsize=12&hidenavigation=1&module=%2Fsrc%2FSchema%2FDemoEditor.js'}>Run on CodeSandbox</a>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <span role={'img'} aria-label={'Quick Evaluate Repl.it'}>🚀</span>{' '}
        <a target="_blank"
           rel="noopener noreferrer"
           href={'https://repl.it/@carolinholat/demo-bts'}>Repl.it Run</a>&nbsp;|&nbsp;
        <a target="_blank"
           rel="noopener noreferrer"
           href={'https://repl.it/github/ui-schema/demo-bts'}>Repl.it Clone</a>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <GithubLogo/>
        <a target="_blank"
           rel="noopener noreferrer"
           href={'https://github.com/ui-schema/demo-bts'}>Source of this demo</a>
    </p>
    <hr style={{opacity: 0.2}}/>
    <p>
        <span role={'img'} aria-label={'Examples'}>📖</span>
        <a target="_blank"
           rel="noopener noreferrer"
           href={'https://ui-schema.bemit.codes/examples'}>Live-Editor + Examples</a>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <span role={'img'} aria-label={'Documentation'}>📖</span>
        <a target="_blank"
           rel="noopener noreferrer"
           href={'https://github.com/ui-schema/ui-schema/blob/master/README.md'}>Documentation, Current Status</a>
    </p>
    <hr style={{opacity: 0.1, margin: '4px 0 4px 26px'}}/>
    <p>
        <GithubLogo/>
        <a target="_blank"
           rel="noopener noreferrer"
           href={'https://github.com/ui-schema/ui-schema'}>Project, Issues</a>
    </p>
</React.Fragment>;
