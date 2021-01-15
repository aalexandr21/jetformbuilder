<?php
/**
 * Progress pages template
 */
?>
<div class="jet-form-progress-pages">
    <?php foreach ( $this->form_breaks as $index => $break ): ?>
        <div class="<?= $this->get_progress_item_class( $index ) ?>" data-page="<?= $index + 1 ?>">
            <div class="jet-form-progress-pages__item">
                <div class="jet-form-progress-pages__item--circle"><?= $index + 1 ?></div>
                <div class="jet-form-progress-pages__item--label"><?= $break['label'] ?></div>
            </div>
            <?php if ( $index + 1 !== $this->pages ): ?>
                <div class="jet-form-progress-pages__separator"></div>
            <?php endif; ?>
        </div>
    <?php endforeach; ?>
</div>