import PropTypes from 'prop-types';

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit","reset"]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
}

export default function PrimaryButton({ 
    type = 'submit', 
    className = '', 
    processing,
    children, 
    onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-2xl  bg-alerange py-[13px] text-center w-full ${processing && "opacity-30"} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
