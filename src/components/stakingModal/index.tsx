import { FC } from "react";

import { Modal, Button } from "components";

type StakingModalProps = {
  isOpen: boolean;
  hide: () => void;
};

export const StakingModal: FC<StakingModalProps> = ({ isOpen, hide }) => {
  return (
    <Modal isOpen={isOpen} hide={hide} title='Stake Your Libre'>
      Staking Modal
      <Button onClick={() => {}} primary>
        Confirm Amount
      </Button>
    </Modal>
  );
};
