import React from 'react';
import profileReducer, {deletePost} from "./profileReducer";

test('after deleting length og messages should be decrement', () => {
    // 1. test dada
    let action = deletePost(1);

    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 21 },
            { id: 2, message: 'It\'s my first post', likesCount: 12 }
        ]
    };

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);
});