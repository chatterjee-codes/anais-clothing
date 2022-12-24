import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import DirectoryItem from '../directory-item/directory-item.component';

import { selectCurrentuser } from '../../store/user/user.selector';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ categories }) => {
    const currentUser = useSelector(selectCurrentuser);
    return (
        <Fragment>
            {currentUser ? (
                <h2
                    style={{
                        textAlign: 'center',
                        fontSize: '18px'
                    }}>
                    Welcome {currentUser.displayName.split(' ')[0]}!
                </h2>
            ) : null}

            <DirectoryContainer>
                {categories.map((category) => (
                    <DirectoryItem key={category.id} category={category} />
                ))}
            </DirectoryContainer>
        </Fragment>
    );
};

export default Directory;
