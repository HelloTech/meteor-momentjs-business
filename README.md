momentjs-business
=================

MomentJS extension for business days calculations (without iteration loops). Based on leonardosantos/momentjs-business. https://github.com/leonardosantos/momentjs-business


Installation
------------

    <script src="moment.js"></script>
    <script src="momentjs-business.js"></script>


Usage
-----

    moment().businessAdd(7);
    moment().businessDiff(moment().subtract(7, 'd'));
