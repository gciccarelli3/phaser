/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

function P0 (t, p)
{
    var k = 1 - t;

    return k * k * k * p;
}

function P1 (t, p)
{
    var k = 1 - t;

    return 3 * k * k * t * p;
}

function P2 (t, p)
{
    return 3 * (1 - t) * t * t * p;
}

function P3 (t, p)
{
    return t * t * t * p;
}

//  p0 = start point
//  p1 = control point 1
//  p2 = control point 2
//  p3 = end point

// https://medium.com/@adrian_cooney/bezier-interpolation-13b68563313a

/**
 * A cubic bezier interpolation method.
 *
 * @function Phaser.Math.Interpolation.CubicBezier
 * @since 3.0.0
 *
 * @param {number} t - The percentage of interpolation, between 0 and 1.
 * @param {number} p0 - The start point.
 * @param {number} p1 - The first control point.
 * @param {number} p2 - The second control point.
 * @param {number} p3 - The end point.
 *
 * @return {number} The interpolated value.
 */
var CubicBezierInterpolation = function (t, p0, p1, p2, p3)
{
    return P0(t, p0) + P1(t, p1) + P2(t, p2) + P3(t, p3);
};

module.exports = CubicBezierInterpolation;
