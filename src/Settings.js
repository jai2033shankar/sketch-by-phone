import React, { Component } from 'react';

const styles = {
    openButton: {
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
    },
    modal: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    },
    modalItem: {
        padding: 10,
        width: '100%',
    },
    detectOptions: {
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'wrap',

    },
    detectOptionItem: {
        minWidth: '150px',
    }
};

class Settings extends Component {
    state = {
        open: false,
    };

    handleOpen = () =>
        this.setState({ isOpen: true });

    handleClose = () =>
        this.setState({ isOpen: false });

    render() {
        const { isOpen } = this.state;
        if (!isOpen) {
            return <button className="btn" style={styles.openButton} onClick={this.handleOpen}>settings</button>
        }

        const {
            blur,
            lowTreshold,
            highTreshold,
            opacity,
            isDetectingEdge,
            onBlurChange,
            onLowTresholdChange,
            onHighTresholdChange,
            onOpacityChange,
            onDetectEdgeChange
        } = this.props;

        return (
            <div style={styles.modal}>
                { !isDetectingEdge &&
                    <div class="form-group" style={styles.modalItem} >
                        <label for="opacity" >
                            opacity
                        </label>
                        <input
                            className="form-control"
                            name="opacity"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={opacity}
                            onChange={onOpacityChange}
                        />
                    </div>
                }
                {
                    isDetectingEdge && (
                        <div style={styles.detectOptions}>
                            <div className="col" style={styles.detectOptionItem}>
                                <label for="blur" >
                                    blur: {blur}
                                </label>
                                <input
                                    className="form-control"
                                    name="blur"
                                    type="range"
                                    min="0"
                                    max="4"
                                    step="1"
                                    value={blur}
                                    onChange={onBlurChange}
                                />
                            </div>
                            <div className="col" style={styles.detectOptionItem}>
                                <label for="lowTreshold" >
                                    low treshold: {lowTreshold}
                                </label>
                                <input
                                    className="form-control"
                                    name="lowTreshold"
                                    type="range"
                                    min="1"
                                    max="127"
                                    step="1"
                                    value={lowTreshold}
                                    onChange={onLowTresholdChange}
                                />
                            </div>
                            <div className="col" style={styles.detectOptionItem}>
                                <label for="highTreshold" >
                                    high treshold: {highTreshold}
                                </label>
                                <input
                                    className="form-control"
                                    name="highTreshold"
                                    type="range"
                                    min="1"
                                    max="127"
                                    step="1"
                                    value={highTreshold}
                                    onChange={onHighTresholdChange}
                                />
                            </div>
                        </div>
                    )
                }
                <div class="form-check" style={styles.modalItem} >
                    <label for="isDetectingEdge" className="form-check-label">
                        <input
                            className="form-check-input"
                            name="isDetectingEdge"
                            type="checkbox"
                            checked={isDetectingEdge ? 'checked' : ''}
                            onChange={onDetectEdgeChange}
                        /> detect edge
                    </label>
                </div>
                <button
                    className="btn btn-block"
                    onClick={this.handleClose}
                >close</button>
            </div>
        );
    }
}


export default Settings;
