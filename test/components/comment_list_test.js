import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() =>{
        const props = { comments: ['New Comment', 'Other New Comment'] };
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        // Expect there to be two comments that we setup above as props
        expect(component.find('li').length).to.equal(2)
    });

    it('shows each comment that is provided', () =>{
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment');
    });

});
