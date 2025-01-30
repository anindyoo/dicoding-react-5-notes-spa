import PropTypes from 'prop-types';

export const noteItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export const noteActionModalTypes = {
  noteId: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  isArchivedNote: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
