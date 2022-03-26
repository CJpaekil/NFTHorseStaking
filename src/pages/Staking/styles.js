import styled from 'styled-components';

// const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;
// const media = {
//     custom: customMediaQuery,
//     desktop: customMediaQuery(922),
//     tablet: customMediaQuery(768),
//     phone: customMediaQuery(576),
// };

export const Styles = styled.div`

    padding-top: 30px;
    padding-bottom: 30px;

    .page-wrapper {
        border-radius: 10px;
        min-height: 500px;
        background: linear-gradient(#000000d1,#0f0538db);
    }

    .filter-key input {
        
    }

    .form-check-label {
        color: white !important;
    }

    .dropdown-menu-dark {
        background-color: #16011ecc !important;
    }

    .dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
        background-color: #2b1685b0 !important;
    }

    .btn-secondary {
        background-color: #2861e15e !important;
    }

    .divider {
        color: #a538f7;
        height: 2px;
    }

    .btn-wallet {
        position: absolute;
        bottom: 20px;
        right: 8px;
    }
`