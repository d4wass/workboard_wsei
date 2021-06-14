import React from 'react';
import styled from 'styled-components';

type ProfileInputType = {
    value: string,
    fnChange: () => void
}

const ProfileInput = ({value, fnChange}: ProfileInputType) => (
    <input/>
);

export default ProfileInput;