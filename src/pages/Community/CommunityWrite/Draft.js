import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';

const BoldButton = styled.button`
  color: var(--Gray-Gray-900, #17191a);
  font-family: Roboto;
  font-size: 0.9vw;
  font-weight: 700;
  background: none;
  border: none;
  cursor: pointer;
`;

const ItalicButton = styled.button`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  font-style: italic;
  background: none;
  border: none;
  cursor: pointer;
`;

const UnderlineButton = styled.button`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`;

const StrikeThroughButton = styled.button`
  color: var(--Gray-Gray-900, #17191a);
  font-family: 'Roboto Serif';
  font-size: 1vw;
  text-decoration: line-through;
  background: none;
  border: none;
  cursor: pointer;
`;

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onStyleClick = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <div
      style={{ border: '1px solid black', padding: '10px', minHeight: '400px' }}
    >
      <BoldButton
        onMouseDown={(e) => {
          e.preventDefault();
          onStyleClick('BOLD');
        }}
      >
        B
      </BoldButton>
      <ItalicButton
        onMouseDown={(e) => {
          e.preventDefault();
          onStyleClick('ITALIC');
        }}
      >
        I
      </ItalicButton>
      <UnderlineButton
        onMouseDown={(e) => {
          e.preventDefault();
          onStyleClick('UNDERLINE');
        }}
      >
        U
      </UnderlineButton>
      <StrikeThroughButton
        onMouseDown={(e) => {
          e.preventDefault();
          onStyleClick('STRIKETHROUGH');
        }}
      >
        T
      </StrikeThroughButton>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </div>
  );
};

export default TextEditor;
